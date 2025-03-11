using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WpfApp2
{
   public  class User
    {
        [Key] 
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
