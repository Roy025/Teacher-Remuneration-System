import "./SimpleButton.css";

export const SimpleButton = ({ buttonName }) => {
  return (
    <div class="frame">
      <button class="custom-btn btn-3">
        <span>{buttonName}</span>
      </button>
    </div>
  );
};
