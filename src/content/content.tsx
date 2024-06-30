const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2");
const bufferCanvas = document.createElement("canvas");
const bufferCtx = bufferCanvas.getContext("2d");

if (!gl) {
  throw new Error("gl context not found");
}

setInterval(() => {
  const width = gl.drawingBufferWidth;
  const height = gl.drawingBufferHeight;
  const pixels = new Uint8Array(width * height * 4);

  bufferCanvas.width = width;
  bufferCanvas.height = height;

  bufferCtx?.translate(0, 0);

  // Wait for the canvas animation to complete before getting the pixel data
  requestAnimationFrame(() => {
    gl.finish();
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    const imageData = bufferCtx?.createImageData(width, height);
    imageData?.data.set(pixels);
    bufferCtx?.putImageData(imageData!, 0, 0);
  });
}, 10);

document.body.prepend(bufferCanvas);
