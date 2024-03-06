// /routes/movie-villains.js

router.get('/:id1/:id2', (req, res) => {
    const id1 = req.params.id1;
    const id2 = req.params.id2;

    getMovieVillainById(id1)
        .then((villain1) => {

            // first query done!

            // Run second query.
            getMovieVillainById(id2)
                .then((villain2) => {

                    console.log('villain1, villain2', villain1, villain2);

                    // Think about async... make sure your render happens LAST!
                    res.render('movie-villains/two-villains', {
                        villain1, villain2
                    });
                });
        });

    

    // Promise.all([
    //     getMovieVillainById(id1),
    //     getMovieVillainById(id2)
    // ]);

    // getMovieVillainById(id)
    //     .then((movieVillain) => {
    //         const templateVars = {
    //             movieVillain
    //         };
    //         res.status(200).render('movie-villains/show', templateVars);
    //     });
});