import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}/>
        </div>
        <div className={classes.descriptionBlock}>
            <img
                src={"https://cdn.the-scientist.com/assets/articleNo/67414/aImg/37218/buckeye-butterfly-wing-scales-structural-color-iridescent-evolution-lamina-t.png"}/>
        </div>
    </div>


}
export default ProfileInfo;