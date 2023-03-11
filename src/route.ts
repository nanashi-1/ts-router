export default Route;

type Route = {
	url: string;
	target: string;
	onPreLoad: () => void;
	onLoad: () => void;
};
