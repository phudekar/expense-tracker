class SlidesProvider {

	getSlides() {
		return [
            {
				title: "Static Pages",
            },
            {
				title: "Server side dynamic Pages",
            },
			{
				title: "Clide side changes with jQuery",
            },
			{
				title: "Modern SPA",
            }
		];
	}
}

module.exports = new SlidesProvider().getSlides();