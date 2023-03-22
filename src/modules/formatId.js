
export default function formatId(id = "1"){
  if(id.length < 4){
    let s = "0000" + id;
    return s.substring(s.length-4);
  } else {
    return id;
  }
}