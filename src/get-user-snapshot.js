import { toPng  } from 'html-to-image';

const main = async () => {
  const onMessage = (event) => {
    // TODO: Check origin
    const data = event.data;

    if (!data.id) return;

    if (data.type === "GET_USER_SNAPSHOT") {
         toPng(document.body)
           .then((dataUrl) => {
            event.source.postMessage({ id: data.id, type: "GET_USER_SNAPSHOT", snapshot: dataUrl}, event.origin)
           });
         return;
       }
  };

  window.addEventListener("message", onMessage);
};

main().catch(console.error);
