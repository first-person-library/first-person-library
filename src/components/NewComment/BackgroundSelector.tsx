import colorpicker from '../../assets/icon/colorpicker.png';
import blurpicker from '../../assets/icon/blurpicker.png';

type Props = {
  colorPickerRef: React.LegacyRef<HTMLInputElement>;
  handleColorPick: () => void;
  handleColorClick: () => void;
};

export default function BackgroundSelector({
  colorPickerRef,
  handleColorPick,
  handleColorClick,
}: Props) {
  return (
    <>
      <div className="md:flex my-7 md:my-8 lg:my-11">
        <div className="md:w-1/4 flex items-center">
          <div className="md:text-left text-base md:text-xl mb-3 md:mb-0">
            배경색 선택하기
          </div>
        </div>
        <div className="md:w-3/4 flex items-center text-dusty-black text-sm md:text-lg gap-6 md:gap-11">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <label htmlFor="colorPicker" className="sr-only"></label>
              <input
                id="colorpicker"
                type="color"
                ref={colorPickerRef}
                onChange={handleColorPick}
                className="absolute w-1 h-1"
              ></input>
              <img
                src={colorpicker}
                alt="컬러 피커"
                onClick={handleColorClick}
                className="w-6 md:w-8 h-6 md:h-8 bg-no-repeat bg-cover bg-colorpick cursor-pointer z-10"
              />
            </div>
            <span>직접 선택하기</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={blurpicker}
              alt="블러 효과"
              className="w-6 md:w-8 h-6 md:h-8 bg-no-repeat bg-cover"
            />
            <span>배경 블러효과</span>
          </div>
        </div>
      </div>
    </>
  );
}
