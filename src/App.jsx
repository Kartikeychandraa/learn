import React from 'react';
import './App.css';

function App() {
function click(num){
  alert(num);
}
  return (
    <div className="m">
      <table>
      <tr>
      <td><button>-</button>
      </td>
        <td><button>-</button></td>
        <td><button>-</button></td>
      </tr>
        <tr>
      <td><button>-</button>
      </td>
        <td><button>-</button></td>
        <td><button>-</button></td>
      </tr>
        <tr>
      <td><button>-</button>
      </td>
        <td><button>-</button></td>
        <td><button>-</button></td>
      </tr>
      </table>
    </div>
  );
}

export default App;