import imageMapping from "./imageMapping";

describe('ImageMapping', ()=>{
    test('image map for weathercode',()=>{
        expect(imageMapping(3)).toMatchInlineSnapshot(`"wi-day-sunny-overcast.svg"`)
    })
})