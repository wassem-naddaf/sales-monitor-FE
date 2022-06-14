export default function highlight($sce) {
  return function (text, phrase) {
    if (phrase) {
      text = text.replace(
        new RegExp('(' + phrase + ')', 'gi'),
        '<mark>$1</mark>',
      );
    }
    return $sce.trustAsHtml(text);
  };
}
