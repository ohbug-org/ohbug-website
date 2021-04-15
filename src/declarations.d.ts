// CSS modules
type CSSModuleClasses = { readonly [key: string]: string }

declare module '*.module.less' {
  const classes: CSSModuleClasses
  export = classes
}

declare module '*.less' {
  const css: string
  export default css
}
