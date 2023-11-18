const Admin = () => {
  return (
    <div className='w-full min-h-[90vh] flex justify-center items-center flex-col gap-6'>
      <h1 className='text-5xl'>Add New Device (Sold)</h1>
      <form
        onSubmit=''
        className='flex flex-col gap-6'
      >
        <input
          className='text-[22px] outline-none border-2 border-sky-500 px-5 py-2 rounded-lg text-sky-600 font-medium'
          type='deviceId'
          placeholder='Enter Device ID'
          name='deviceId'
          required
        />
        <input
          className='text-[22px] outline-none border-2 border-sky-500 px-5 py-2 rounded-lg text-sky-600 font-medium bg-sky-300 cursor-pointer hover:bg-transparent duration-700'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default Admin;
