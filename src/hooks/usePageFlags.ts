import { useLocation } from 'react-router-dom';

export default function usePageFlags() {
  const location = useLocation();
  const { pathname } = location;

  const checkPagePath = (...pagePaths: string[]): boolean => {
    return pagePaths.some((path) => pathname.includes(path));
  };

  const IS_HOME_PAGE = pathname === '/';
  const IS_MYCOMMENTS_PAGE = checkPagePath('/my');
  const IS_UPDATE_PAGE = checkPagePath('/my/');
  const IS_WRITE_PAGE = checkPagePath('/my/', '/new');
  const IS_COMMENTS_PAGE = checkPagePath('/comments');
  const HAS_COMMENTS = IS_HOME_PAGE || IS_MYCOMMENTS_PAGE || IS_COMMENTS_PAGE;

  return {
    IS_HOME_PAGE,
    IS_MYCOMMENTS_PAGE,
    IS_UPDATE_PAGE,
    IS_WRITE_PAGE,
    IS_COMMENTS_PAGE,
    HAS_COMMENTS,
  };
}
