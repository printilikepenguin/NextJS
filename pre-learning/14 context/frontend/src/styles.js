import styled from "styled-components";

// 바의 스타일
export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

export const BarSongTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

// 버튼 스타일
export const Button = styled.button`
  background-color: #555;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #777;
  }

  &:disabled {
    background-color: #444;
    cursor: not-allowed;
  }
`;

// 재생 목록 스타일
export const PlayList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// 각 곡의 스타일
export const Song = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#e6e6e6" : "#fff")};

  &:hover {
    background-color: #f1f1f1;
  }

  &:last-child {
    border-bottom: none;
  }
`;

// 곡 제목 스타일
export const SongTitle = styled.span`
  font-size: 16px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "green" : "black")};
`;
