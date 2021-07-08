//styling
import { Item, ProductImage } from "../../styles";

const ClassCard = (props) => {
  const { _class } = props;
  return (
    <Item className="card" style={{ width: "18rem" }}>
      <ProductImage
        className="card-img-top"
        src={_class.image}
        alt={_class.name}
      />
      <div className="card-body">
        <h5 className="card-title">{_class.name}</h5>
        <h5 className="card-title">{_class.price} Jod</h5>
        <h5 className="card-title">{_class.type}</h5>
      </div>
    </Item>
  );
};

export default ClassCard;
