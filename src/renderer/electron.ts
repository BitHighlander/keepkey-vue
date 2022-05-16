/**
 * This file is used to typehint the exposed electron api's.
 * The purpose of this is to get static analysis in Vue files without additional plug-ins.
 */
import { IpcRenderer, contextBridge  } from 'electron'

const ipcRenderer = window.electron.ipcRenderer as IpcRenderer

export {
  ipcRenderer
}
