

export function Button() {
    
    let number = 15
    let displayString

    if (number > 10) {
        displayString = "Big Number"
    }
    else {
        displayString = "Small Number"
    }

    return (
        <button>
            <p>
                {displayString}
            </p>
        </button>
    )
}