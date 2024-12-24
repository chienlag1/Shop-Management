import Footer from "../footer"
import Header from "../header"


const MasterLayout =({children, ...props})=>{
    return(
        <div {...props}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </div>
        
    )
}
export default MasterLayout