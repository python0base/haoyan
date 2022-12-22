/// <reference types="vite/client" />
// 类型定义和声明文件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
  interface IModalConfig {}
  export { IModalConfig }
}

declare module '*.mjs'
