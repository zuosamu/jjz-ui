declare module '*.css';
declare module '*.less';
declare module '*.png' {
  const resource: { [key: string]: string };
  export default resource;
}
declare module '*.less' {
  const resource: { [key: string]: string };
  export default resource;
}
