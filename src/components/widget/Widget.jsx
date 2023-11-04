import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">23123</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpIcon/>
                20%
            </div>
            <PermIdentityIcon/>
        </div>
    </div>
  )
}

export default widget