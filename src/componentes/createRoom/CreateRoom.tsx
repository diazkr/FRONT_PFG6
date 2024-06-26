'use client';
import { CldUploadWidget } from 'next-cloudinary';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { Habitacion, HabitacionError } from '@/interfaces/HabitacionInterface';
import Select, { MultiValue } from 'react-select';
import { validateRegister } from '@/helpers/validate';
import Link from "next/link";


const CreateRoom = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [habitacion, setHabitacion] = useState<Habitacion>({
        id: '',
        type: '',
        price: 0,
        description: '',
        state: '',
        images: [],
        roomNumber: 0,
        services: [],
    });

    const [errorsForm, setErrorsForm] = useState<HabitacionError>({
        id: '',
        type: '',
        price: '',
        description: '',
        state: '',
        images: '',
        roomNumber: '',
        services: '',
    })
     

    const [filters, setFilters] = useState({
        standard: false,
        double: true,
        deluxe: false,
        suite: false,
        family: false,
        services: {
          wifi: false,
          television: false,
          seaView: false,
          airConditioning: false,
          heating: false,
          safeBox: false,
          parking: false,
          fridge: false,
          breakfast: false,
          jacuzzi: false,
        }
      });

      const options = [
        { value: 'wifi', label: 'WiFi' },
        { value: 'television', label: 'Televisión' },
        { value: 'seaView', label: 'Vista al Mar' },
        { value: 'airConditioning', label: 'Aire Acondicionado' },
        { value: 'heating', label: 'Calefacción' },
        { value: 'safeBox', label: 'Caja Fuerte' },
        { value: 'parking', label: 'Estacionamiento' },
        { value: 'fridge', label: 'Refrigerador' },
        { value: 'breakfast', label: 'Desayuno' },
        { value: 'jacuzzi', label: 'Jacuzzi' },
      ];
      
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(habitacion);
        try {
            const response = await fetch('http://localhost/3001/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(habitacion),
            });
            if (response.ok) {
                alert("Habitacion creada correctamente")
                router.push('/rooms/id');
            } else {
                console.error('Error al enviar la habitación al servidor');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const [urls, setUrls] = useState<string[]>([]);
    console.log(urls);

    const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([]);

    const handleChangeServicies = (selected: MultiValue<{ value: string; label: string }>) => {
        setHabitacion(prevState => ({
            ...prevState,
            services: selected.map(option => option.value),
        }));

        }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setHabitacion(prevState => ({
            ...prevState,
            [name]: name === "price" || name === "roomNumber" ? Number(value) : value
        }));
    };

    ///const handleServiciosChange = (e: any) => {
        //const selectedOptions = Array.from(e.target.selectedOptions, (option: any) => option.value);
        //setHabitacion(prevState => ({
            //...prevState,
            //services: selectedOptions
        //}));
    //};

    //const handleSubmit = (e: any) => {
        //e.preventDefault();

        
        // Aquí puedes enviar los datos del formulario a tu backend o manejarlos según tus necesidades
        //console.log(habitacion);
    //};

    useEffect(() => {
        const errors = validateRegister(habitacion)
        setErrorsForm(errors)
    }, [habitacion])


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-[#d9eeec] rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Tipo de habitación:</label>
                <select name="type" value={habitacion.type} onChange={handleChange} className="p-2 border border-gray-300 rounded-md w-full">
                    <option value="standard">Estandar</option>
                    <option value="double">Doble</option>
                    <option value="deluxe">Delux</option>
                    <option value="suite">Suite</option>
                    <option value="family">Familiar</option>
                </select>
                {errorsForm.type && <p>{errorsForm.type}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Precio:</label>
                <input type="number" name="price" value={habitacion.price} onChange={handleChange} className="p-2 border border-gray-300 rounded-md w-full" />
                {errorsForm.price && <p>{errorsForm.price}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Descripción:</label>
                <textarea name="description" value={habitacion.description} onChange={handleChange} className="p-2 border border-gray-300 rounded-md w-full"/>
                {errorsForm.description && <p>{errorsForm.description}</p>}
            </div>


            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Estado:</label>
                <select id='state' name="state" onChange={handleChange} value={habitacion.state} className="p-2 border border-gray-300 rounded-md w-full" >
                    <option value=''>Selecciona</option>
                    <option value='Available'>Disponible</option>
                    <option value='InMaintenance'>No disponible</option>
                    <option value='Occupied'>Ocupado</option>
                </select>
                {errorsForm.state && <p>{errorsForm.state}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="roomNumber" className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Número de habitación:</label>
                <select id="roomNumber" name="roomNumber" onChange={handleChange} value={habitacion.roomNumber} className="p-2 border border-gray-300 rounded-md w-full">
                    <option value="">Selecciona un número</option>
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="103">103</option>
                </select>
                {errorsForm.roomNumber && <p>{errorsForm.roomNumber}</p>}
            </div>

            <div className="mb-4">
            <label htmlFor="services" className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Servicios:</label>
                <Select
                    isMulti
                    value={options.filter(option => habitacion.services.includes(option.value))}
                    onChange={handleChangeServicies}
                    options={options}
                    className="basic-multi-select p-2 border border-gray-300 rounded-md"
                    classNamePrefix="select"
                    placeholder="Selecciona servicios..."
                />
                {errorsForm.services && <p>{errorsForm.services}</p>}
            </div>

            <main className="mb-4">
                <h1 className="block text-gray-700 font-bold mb-2" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>Subir imágenes</h1>
                <section>
                    <CldUploadWidget 
                        uploadPreset="upload_default" 
                        onSuccess={(cldResponse: any) => {
                            console.log(cldResponse, 'url');
                            setHabitacion(prevState => ({
                                ...prevState,
                                images: [...prevState.images, cldResponse.info?.secure_url],
                            }));
                            setUrls(prevUrls => [...prevUrls, cldResponse.info?.secure_url]);
                        }}>
                        {({ open }) => { 
                            return (
                                <div 
                                className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300 flex flex-col items-center justify-center mb-6"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    open();
                                }}>
                                    <p className="text-lg font-bold mb-2">Subir una imagen</p>
                                    <p className="text-sm mb-1">Upload a File</p>
                                    <p className="text-xs text-gray-600">Drag and drop files here</p>
                                {errorsForm.images && <p>{errorsForm.images}</p>}
                                </div>
                            );
                        }}
                    </CldUploadWidget>

                    <div className=" mt-6 flex flex-wrap gap-4">
                        {urls.map((url) => {
                            return (
                                <img src={url} 
                                width={150} 
                                height={150} 
                                alt='imagen desde cloudinary' 
                                key={url} 
                                className="rounded-lg shadow-md"
                                />
                            );
                        })}
                    </div>
                </section>
            </main>
            <Link href='/rooms/id'>
                <button type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300" style={{ color: 'rgb(81,161,168)', marginBottom: '1rem' }}>
                    

                    Crear Habitación
                    </button>
            </Link>
        </form>
        
    )
}

export default CreateRoom;