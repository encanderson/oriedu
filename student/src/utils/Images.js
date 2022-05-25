export function saveImage(data) {
  let reader = new FileReader();

  if (data) {
    reader.readAsDataURL(data);

    return reader;
  }

  return;
}
