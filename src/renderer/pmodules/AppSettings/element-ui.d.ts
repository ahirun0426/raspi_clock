
declare module 'element-ui/lib/locale/lang/ja' {
  const lang: any;
  export default lang;
}

declare module 'element-ui/lib/locale' {
  const locale: { use: (lang:any)=>void; }
  export default locale;
}
