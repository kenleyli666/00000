import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Toggle({ onClick }) {
    return (
        <>  
            <div className='p-1 border-4 border-solid rounded-full hover:bg-orange-500' onClick={onClick}>
                <MenuBookIcon className='text-white'/>
            </div> 
        </>
    );
}
