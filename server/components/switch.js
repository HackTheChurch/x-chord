export default function Switch({ isChacked, title, description }) {
  return (
    <div className="w-full flex items-center">
      <div className="relative w-8 h-4 -mt-5 rounded-full cursor-pointer">
        <input
          type="checkbox"
          id="desc"
          className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-red-600 checked:bg-green-600 peer-checked:border-red-600 peer-checked:before:bg-red-600"
          defaultChecked={isChacked}
        />
        <label
          htmlFor="desc"
          className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
        >
          <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
        </label>
      </div>
      <label
        htmlFor="desc"
        className="w-full mt-px mb-0 ml-3 font-light cursor-pointer select-none"
      >
        <div>
          <p className="block text-base antialiased font-medium leading-relaxed">
            {title}
          </p>
          <p className="block text-sm antialiased font-normal leading-normal">
            {description}
          </p>
        </div>
      </label>
    </div>
  );
}
