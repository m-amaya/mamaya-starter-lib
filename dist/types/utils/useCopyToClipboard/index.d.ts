declare function useCopyToClipboard(): (string | ((text: string) => Promise<boolean>))[];
export default useCopyToClipboard;
