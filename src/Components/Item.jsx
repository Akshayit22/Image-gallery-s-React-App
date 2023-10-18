import {BiLike} from "react-icons/bi";

const Item = ({item}) =>{
    
    


    return(
        <div>
            {
                item &&
                (
                    <div>
                        <div>
                            <img src={item.urls.small} alt={item.alt_description} loading="lazy" ></img>
                        </div>

                        <div className='flex justify-between text-white'>
                            <div className='flex'>
                                <div>
                                    <img src={item.user.profile_image.small} className='rounded-full mx-2 my-2 h-[50px]'></img>
                                </div>
                                <div>
                                    <p className="text-md mt-1">{item.user.name}</p>
                                    <a href="#"><span className="text-sm">{item.user.username}</span></a>
                                </div>
                                
                            </div>
                            <div className="flex justify-between mt-3 px-5">
                                    <p className="text-lg">{item.likes}</p>
                                    <BiLike fontSize="1.75rem" color="red"></BiLike>
                            </div>

                        </div>
                        
                    </div>
                )
            }
            
        </div>
    )
}
export default Item;