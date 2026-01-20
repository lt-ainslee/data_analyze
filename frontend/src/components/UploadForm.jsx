const UploadForm = ({ onUpload }) => (
  <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
    <h2 className="text-lg font-semibold">文件上传</h2>
    <p className="mt-1 text-sm text-slate-500">
      支持 CSV/Excel，上传后将调用后端 /upload 接口。
    </p>
    <div className="mt-4 flex items-center gap-3">
      <input
        type="file"
        className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-white"
        onChange={(event) => onUpload(event.target.files?.[0])}
      />
      <button
        type="button"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        onClick={() => onUpload(null)}
      >
        模拟上传
      </button>
    </div>
  </div>
);

export default UploadForm;
