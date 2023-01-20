import { faCirclePlus, faDownLong, faRightLeft, faRightLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { HomeMenuDiv } from "../../../styledComponents";
import HomeMenuBtn from "../../atomics/home/HomeMenuBtn";

const HomeMenu = () => {

    return (
        <>
        <HomeMenuDiv>
            <HomeMenuBtn icon={faCirclePlus} text="제품 등록" />
            <HomeMenuBtn icon={faDownLong} text="입고" />
            <HomeMenuBtn icon={faUpLong} text="출고" />
            <HomeMenuBtn icon={faRightLong} text="이동" />
            <HomeMenuBtn icon={faRightLeft} text="조정" />
        </HomeMenuDiv>
        </>
    )
}

export default HomeMenu;