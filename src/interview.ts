// 'ABCDDDDEFGHI' --> 'DEFGHI'

const getLongestSubstrCharacters = (str: string): string => {
  if (str.length === 0) return "";
  if (str.length === 1) return str[0];
  const splittedString = str.split("");
  let startPosition = 0;
  const items = splittedString.map((element,idx) => {
    const nextElement = splittedString[idx+1];
    startPosition++
    if(!nextElement) return
    if(element === nextElement) {
        console.log("startPosition: ", startPosition, "index: ",idx)
    }
  })
  console.log("items ->", items)
};
getLongestSubstrCharacters("ABCDEFGHIIIKLMN");
//[ABCDEFGHI,IKLMN]