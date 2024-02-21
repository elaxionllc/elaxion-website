import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './BouncingArrow.css'; // Create this CSS file

const BouncingArrow = () => {
  return (
    <div className="bouncing-arrow">
      <KeyboardDoubleArrowDownIcon style={{
        fontSize: '40px'
      }} />
    </div>
  );
};

export default BouncingArrow;
