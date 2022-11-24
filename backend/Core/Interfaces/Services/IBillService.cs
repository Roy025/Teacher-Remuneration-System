using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.OtherDTOs;
using Core.Models;

namespace Core.Interfaces.Services
{
    public interface IBillService
    {
        Task<BillResponseDto>GetBillAsync (BillParams billParams, UserFromToken user);
    }
}