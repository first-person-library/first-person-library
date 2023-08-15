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
  const isIOSEnvironment = /iPad|iPhone/.test(navigator.userAgent);

  return (
    <div className="md:flex my-7 md:my-8 lg:my-11">
      <div className="md:w-1/4 flex items-center">
        <div className="text-strong-black dark:text-dusty-white md:text-left text-base md:text-xl mb-3 md:mb-0">
          배경색 선택하기
        </div>
      </div>
      <div
        className={`md:w-3/4 flex items-center text-dusty2-black dark:text-normal-gray text-sm md:text-lg gap-6 md:gap-11 ${
          thumbnail ? 'hover:cursor-pointer' : 'pointer-events-none'
        }`}
      >
        {!isIOSEnvironment && (
          <div
            onClick={handleColorClick}
            className="flex items-center gap-4"
            role="button"
          >
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
                src="colorpicker.png"
                alt="컬러 피커"
                className="icon w-6 md:w-8 z-10"
              />
            </div>
            <span
              className={`${
                backgroundType === 'color'
                  ? 'text-strong-black dark:text-white font-bold'
                  : 'font-medium '
              }`}
            >
              직접 선택하기
            </span>
          </div>
        )}
        <div
          id="backgroundType"
          onClick={handleBlurClick}
          className="flex items-center gap-4"
          role="button"
        >
          <Icon
            src="blurpicker.png"
            alt="블러 효과"
            className="icon w-6 md:w-8"
          />
          <span
            className={`${
              backgroundType === 'blur'
                ? 'text-strong-black dark:text-white font-bold'
                : 'font-medium '
            }`}
          >
            배경 블러효과
          </span>
        </div>
      </div>
    </div>
  );
}
