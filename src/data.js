export const filterData = [
  { text: "전체 보기", name: "all" },
  { text: "제품명", name: "product" },
  { text: "위치별", name: "place" },
];

export const uploadHeader = [
  { keyword: "inventory", text: "제품 등록" },
  { keyword: "in", text: "입고서" },
  { keyword: "out", text: "출고서" },
  { keyword: "move", text: "재고 이동" },
  { keyword: "adjust", text: "조정서" },
];

export const typeData = [
  { id: "STRING", name: "텍스트" },
  { id: "NUMBER", name: "숫자" },
  { id: "DATETIME", name: "날짜" },
];

export const pendingType = [
  { type: "IN", name: "입고" },
  { type: "OUT", name: "출고" },
  { type: "MOVE", name: "이동" },
  { type: "ADJUST", name: "조정" },
];

export const roleType = [
  { type: "admin", name: "관리자" },
  { type: "member", name: "사용자" },
];

export const permissionType = [
  { type: "PLACE", name: "위치 설정" },
  { type: "ATTRIBUTE", name: "속성 설정" },
  { type: "ROLE", name: "역할" },
  { type: "PENDING_ADJUST", name: "조정" },
  { type: "PENDING_MOVE", name: "이동" },
  { type: "PENDING_OUT", name: "출고" },
  { type: "PENDING_IN", name: "입고" },
  { type: "PRODUCT", name: "제품 등록" },
];

