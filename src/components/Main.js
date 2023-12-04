import App from "../App"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../redux/actions"
import { withRouter } from "react-router-dom"
const mapStateToProps=(state)=>{
    return{
        posts:state.post,
        comments:state.comment
    }
}

const mapDispatchTOProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)
}

const Main=withRouter(connect(mapStateToProps,mapDispatchTOProps)(App))

export default Main