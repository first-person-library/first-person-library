import { ChangeEvent } from 'react';

type CommentContentProps = {
  content: string;
  handleContent: (content: string) => void;
};

export default function CommentContent({
  content,
  handleContent,
}: CommentContentProps) {
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value.slice(0, 50);
    handleContent(newContent);
  };

  return (
    <div className="relative">
      <label htmlFor="content" className="sr-only">
        코멘트 작성란
      </label>
      <textarea
        rows={4}
        id="content"
        value={content}
        onChange={handleContentChange}
        placeholder="50자 이내의 도서 코멘트를 남겨주세요."
        className="w-full border p-3 md:p-6 focus:outline-none text-base md:text-xl"
        required
      />
      <div className="absolute right-2 bottom-5 md:right-12 md:bottom-7 text-base md:text-xl">
        <span className="text-main-green">{`${content.length || 0}`}</span>
        <span className="text-dusty2-black">/50자</span>
      </div>
    </div>
  );
}
