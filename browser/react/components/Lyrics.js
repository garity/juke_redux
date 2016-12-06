import React from 'react';

export default function (props) {
  const text = props.lyric;
  const setArtist = props.setArtist;
  const artistQuery = props.artistQuery;
  const setSong = props.setSong;
  const songQuery = props.songQuery;
  const submit = props.submit;

  const artistChange = function (evt) {
    setArtist(evt.target.value);
  }

  const songChange = function (evt) {
    setSong(evt.target.value);
  }

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={submit}>
        <div className="form-group">
                <label className="col-xs-2 control-label">Artist</label>
                <div className="col-xs-10">
                  <input
                    className="form-control"
                    type="text"
                    value={artistQuery}
                    onChange={artistChange}
                  />
                </div>
        </div>

        <div className="form-group">
                <label className="col-xs-2 control-label">Song</label>
                <div className="col-xs-10">
                  <input
                    className="form-control"
                    type="text"
                    value={songQuery}
                    onChange={songChange}
                  />
                </div>
        </div>

        <pre>
          {text || 'Search above!'}
        </pre>

        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button
              type="submit"
              className="btn btn-success"
              onClick = {submit}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
