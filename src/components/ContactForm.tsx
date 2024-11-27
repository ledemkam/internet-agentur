import { SubmitHandler, useForm } from "react-hook-form";






type TkontaktSchema = {
    name: string;
    email: string;
    message: string;
  };
  
 


const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
       
        
      } = useForm<TkontaktSchema>();
    
      const onSubmit: SubmitHandler<TkontaktSchema> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        reset();
    
      };


  return (
    <div className="form-container">
        <h2>Uns kontaktieren</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-content">
            <label htmlFor="name">Name</label>
            <input {...register("name",{ required: "name is required"})} type="text" id="name" placeholder="Ihr Name eingeben"/>
            {errors.name && (<p style={{color: "red"}}>{`${errors.name.message}`}</p>)}
            <label htmlFor="email">Email</label>
            <input {...register("email",{ required: "email is required"})} type="email" id="email" placeholder="Ihr email eingeben"/>
            {errors.email && (<p style={{color: "red"}}>{`${errors.email.message}`}</p>)}
            <label htmlFor="message">Message</label>
            <textarea {...register("message",{ required: "message is required"})} id="message" placeholder="Ihr nachricht..."></textarea>
            {errors.message && (<p style={{color: "red"}}>{`${errors.message.message}`}</p>)}
            <input type="submit" value="senden" className="hover button" disabled={isSubmitting}/>
        </form>
    </div>
  )
}
export default ContactForm