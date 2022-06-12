export const promptDownload = ( dataURL : string, name : string ) => {
  const link = document.createElement( 'a' );
  link.href = dataURL;
  link.download = name;
  link.click();
};