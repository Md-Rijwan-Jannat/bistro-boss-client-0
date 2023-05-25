

const MenuButton = ({btnMenu}) => {
    return (
        <div className="flex justify-center items-center mb-20">
            <button className="btn btn-outline border-0 border-b-4">{btnMenu}</button>
        </div>
    );
};

export default MenuButton;