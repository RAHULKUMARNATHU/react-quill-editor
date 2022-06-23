import { Dropdown, Button, Menu } from "antd";
import { useState } from "react";
import { User, Layout, Plus } from "react-feather";
import { useId } from "react";
import { Editor, Image } from "../../component";
import "./home.component.scss";

const Home = () => {
  const id = useId();

  const [elements, setElements] = useState(["editor"]);

  const handleClick = ({ key }) => {
    const elementsCopy = [...elements];
    elementsCopy.push(key === "0" ? "editor" : "image");
    setElements(elementsCopy);
  };
  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          label: "Text",
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: "Image",
          key: "1",
        },
      ]}
    />
  );
  return (
    <div className="home-page-container">
      <div className="home-page-left">
        <div className="home-page-left-menu">
          <div className="home-page-left-menu-item">
            <Layout
              className="home-page-left-menu-icon"
              color="grey"
              size={18}
            />
            <div className="home-page-left-menu-label">Dashboard</div>
          </div>
          <div className="home-page-left-menu-item">
            <User className="home-page-left-menu-icon" color="grey" size={18} />
            <div className="home-page-left-menu-label">Profile</div>
          </div>
        </div>
      </div>
      <div className="home-page-right">
        <div className="home-page-element-container">
          {elements.map((element, index) =>
            element === "editor" ? <Editor key={`${id}-${index}`} /> : <Image />
          )}
        </div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            className="home-page-right-add-button"
            icon={<Plus size={16} />}
          >
            Click to add Block
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Home;
