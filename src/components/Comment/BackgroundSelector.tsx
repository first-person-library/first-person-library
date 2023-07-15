import Icon from '../UI/Icon';

type BackgroundSelectorProps = {
  backgroundType: 'color' | 'blur' | null;
  colorPickerRef: React.RefObject<HTMLInputElement>;
  handleColorPick: () => void;
  handleColorClick: () => void;
  handleBlurClick: () => void;
  thumbnail?: string;
};

export default function BackgroundSelector({
  backgroundType,
  colorPickerRef,
  handleColorPick,
  handleColorClick,
  handleBlurClick,
  thumbnail,
}: BackgroundSelectorProps) {
  return (
    <div className="md:flex my-7 md:my-8 lg:my-11">
      <div className="md:w-1/4 flex items-center">
        <div className="md:text-left text-base md:text-xl mb-3 md:mb-0">
          배경색 선택하기
        </div>
      </div>
      <div
        className={`md:w-3/4 flex items-center text-dusty2-black text-sm md:text-lg gap-6 md:gap-11 ${
          thumbnail ? 'hover:cursor-pointer' : 'pointer-events-none'
        }`}
      >
        <div onClick={handleColorClick} className="flex items-center gap-4">
          <div className="relative flex items-center justify-center shrink-0">
            <label htmlFor="backgroundColor" className="sr-only"></label>
            <input
              id="backgroundColor"
              type="color"
              ref={colorPickerRef}
              onChange={handleColorPick}
              className="absolute w-1 h-1"
            ></input>
            <Icon
              src="/icon/colorpicker.png"
              alt="컬러 피커"
              className="icon w-6 md:w-8 z-10"
            />
          </div>
          <span
            className={`font-medium ${
              backgroundType === 'color' ? 'text-strong-black' : ''
            }`}
          >
            직접 선택하기
          </span>
        </div>
        <div
          id="backgroundType"
          onClick={handleBlurClick}
          className="flex items-center gap-4"
        >
          <Icon
            src="/icon/blurpicker.png"
            alt="블러 효과"
            className="icon w-6 md:w-8"
          />
          <span
            className={`font-medium ${
              backgroundType === 'blur' ? 'text-strong-black' : ''
            }`}
          >
            배경 블러효과
          </span>
        </div>
      </div>
    </div>
  );
}
