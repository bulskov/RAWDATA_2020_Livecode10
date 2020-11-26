using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public interface IDataService
    {
        IList<Category> GetCategories();
        Category GetCategory(int id);
    }

    public class DataService : IDataService
    {


        public IList<Category> GetCategories()
        {
            using var ctx = new NorthwindContex();
            return ctx.Categories.ToList();
        }

        public Category GetCategory(int id)
        {
            using var ctx = new NorthwindContex();
            return ctx.Categories.Find(id);
        }
    }
}
