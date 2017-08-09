export default function (spec) {
    spec.describe("Finding Buttons on Screen", function() {
        spec.it('Button 1 is present', async function() {
            await spec.pause(1000);
            await spec.exists('Home.Button');
        });
        spec.it('Show About Page', async function() {
            await spec.pause(1000);
            await spec.press('Home.Button');
            await spec.exists('About.Text');
        })
    })
}
