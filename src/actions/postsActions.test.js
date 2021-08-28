const rewire = require("rewire")
const postsActions = rewire("./postsActions")
const updatePost = postsActions.__get__("updatePost")
// @ponicode
describe("postsActions.fetchPosts", () => {
    test("0", () => {
        let callFunction = () => {
            postsActions.fetchPosts()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("postsActions.fetchSinglePost", () => {
    test("0", () => {
        let callFunction = () => {
            postsActions.fetchSinglePost(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            postsActions.fetchSinglePost("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            postsActions.fetchSinglePost(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            postsActions.fetchSinglePost("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            postsActions.fetchSinglePost(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            postsActions.fetchSinglePost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("postsActions.createPost", () => {
    test("0", () => {
        let callFunction = () => {
            postsActions.createPost("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            postsActions.createPost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("postsActions.updateLikes", () => {
    test("0", () => {
        let callFunction = () => {
            postsActions.updateLikes("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            postsActions.updateLikes("a85a8e6b-348b-4011-a1ec-1e78e9620782", "01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            postsActions.updateLikes("7289708e-b17a-477c-8a77-9ab575c4b4d8", "01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            postsActions.updateLikes("a85a8e6b-348b-4011-a1ec-1e78e9620782", "01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            postsActions.updateLikes("a85a8e6b-348b-4011-a1ec-1e78e9620782", "01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            postsActions.updateLikes(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updatePost", () => {
    test("0", () => {
        let callFunction = () => {
            updatePost("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updatePost("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updatePost("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updatePost("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updatePost("https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            updatePost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
