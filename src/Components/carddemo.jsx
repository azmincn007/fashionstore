 {/* <div className="card-map">
          {data.map((obj, index) => (
            <div className="card-container" key={index}>
              <div className="top">
                <img src={obj.image} alt="" />
              </div>
              {cartStates[index] ? (
                <h1>added to cart</h1>
              ) : (
                <>
                  <div className="bottom">
                    <div className="left">
                      <div className="contents">
                        <h2>{obj.category}</h2>
                        <h3>{obj.price}</h3>
                      </div>
                    </div>
                    <div className="right">
                      <button
                        onClick={() => addtocartt(index)}
                        disabled={cartStates[index]}
                      >
                        <FaCartArrowDown className="cartbutton" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div> */}