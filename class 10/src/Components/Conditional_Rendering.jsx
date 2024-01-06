import { Product_Card } from "./Product_Card";
import { Details_Component } from "./Details_Component";

export const Conditional_Rendering = () => {
  // const [show_details, setShow_details] = useState(false);
  const [current_data, setCurrent_data] = useState(null);

  const show_details_handle = (data) => {
    setCurrent_data(data);
    // setShow_details(true);
  };

  const go_back_handle = () => {
    setCurrent_data(null);
  };
  return (
    <div className="container mx-auto">
      {/* --------- Product Cards */}
      {current_data ? (
        <Details_Component
          go_back_handle={go_back_handle}
          title={current_data.title}
          price={current_data.price}
          image_url={current_data.image_url}
          description={current_data.description}
        />
      ) : (
        <div className="grid grid-cols-3">
          <Product_Card
            click_handle={show_details_handle}
            title={"Golden Easy Spot Chair."}
            price={"1500"}
            image_url={"https://api.escuelajs.co/api/v1/files/4b20.png"}
          />
          <Product_Card
            click_handle={show_details_handle}
            title={"w/IPhone Pro Max 15"}
            price={"9999"}
            image_url={"https://api.escuelajs.co/api/v1/files/233f.png"}
          />
          <Product_Card
            click_handle={show_details_handle}
            title={"New Product"}
            price={"123"}
            image_url={"https://i.imgur.com/QkIa5tT.jpeg"}
          />
        </div>
      )}
    </div>
  );
};
