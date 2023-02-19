import { faCirclePlus, faDownLong, faRightLeft, faRightLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { HomeMenuDiv } from "../../../styledComponents";
import HomeMenuBtn from "../../atomics/home/HomeMenuBtn";

const HomeMenu = () => {

    return (
        <>
        <HomeMenuDiv>
            <HomeMenuBtn icon={faCirclePlus} text="제품 등록" filter="inventory" />
            <HomeMenuBtn icon={faDownLong} text="입고" filter="in"/>
            <HomeMenuBtn icon={faUpLong} text="출고" filter="out" />
            <HomeMenuBtn icon={faRightLong} text="이동" filter="move" />
            <HomeMenuBtn icon={faRightLeft} text="조정" filter="adjust" />
        </HomeMenuDiv>
        </>
    )
}

export default HomeMenu;