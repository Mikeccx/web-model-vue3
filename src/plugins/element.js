import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { 
    ElButton, 
    ElMenu,  
    ElSubmenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain
} from 'element-plus'

export default (app) => {
    locale.use(lang)
    app.use(ElButton)
    app.use(ElMenu)
    app.use(ElSubmenu)
    app.use(ElMenuItem)
    app.use(ElMenuItemGroup)
    app.use(ElContainer)
    app.use(ElHeader)
    app.use(ElAside)
    app.use(ElMain)
}
